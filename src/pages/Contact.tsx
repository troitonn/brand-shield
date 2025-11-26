import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const phoneNumber = "5511989737753";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,

      _captcha: "false",
      _bcc:
        "alexsandro.braga@troiton.com.br, gustavoroccocorrea@hotmail.com, raffaellabernardino@gmail.com",
    };

    await fetch("https://formsubmit.co/registros&marcas@troiton.com.br", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    toast.success("Mensagem enviada com sucesso!");

    // texto para enviar ao WhatsApp
    const message = encodeURIComponent(
      `Nova solicitação de contato:\n\n` +
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Serviço: ${formData.service}\n` +
        `Mensagem: ${formData.message}`
    );

    // Redirecionar para WhatsApp
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brand-ice to-background">
      <div className="section-container">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pronto para blindar sua marca?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entre em contato conosco e descubra como podemos proteger seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border">
              
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="phone">WhatsApp</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="(11) 99999-9999" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="service">Tipo de Serviço</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="registro">Registro de Marca</SelectItem>
                    <SelectItem value="monitoramento">Monitoramento</SelectItem>
                    <SelectItem value="defesa">Defesa Jurídica</SelectItem>
                    <SelectItem value="b2b">Gestão B2B</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Conte-nos sobre seu projeto..." className="mt-2 min-h-32" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Enviar Solicitação
              </Button>
            </form>
          </motion.div>

          {/* LADO DIREITO — TODOS OS BOTÕES REDIRECIONAM PARA WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Links Diretos</h2>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 justify-start" asChild>
                  <a href={`https://wa.me/${phoneNumber}?text=Olá! Quero registrar minha marca.`}>
                    <MessageCircle className="mr-2" size={20} />
                    Registrar Minha Marca
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="w-full justify-start" asChild>
                  <a href={`https://wa.me/${phoneNumber}?text=Olá! Preciso falar com o jurídico.`}>
                    <Phone className="mr-2" size={20} />
                    Falar com o Jurídico
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="w-full justify-start" asChild>
                  <a href={`https://wa.me/${phoneNumber}?text=Olá! Quero saber sobre parcerias.`}>
                    <Mail className="mr-2" size={20} />
                    Parcerias
                  </a>
                </Button>
              </div>
            </div>

            {/* INFORMAÇÕES DE CONTATO — sem alterações */}
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-muted-foreground">contato@wagr.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">São Paulo, SP<br />Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Atendimento Rápido</h3>
              <p className="mb-4">Respondemos todas as solicitações em até 24 horas úteis.</p>
              <p className="text-sm opacity-90">Para urgências, entre em contato diretamente via WhatsApp.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertConsultationRequest } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    legalChallenge: "",
    projectDetails: "",
    agreedToTerms: false,
  });

  const submitConsultationMutation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      return await apiRequest("POST", "/api/consultation-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Consultation Request Submitted!",
        description: "Our team will contact you within 24 hours to discuss your legal needs.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        legalChallenge: "",
        projectDetails: "",
        agreedToTerms: false,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/consultation-requests"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.phone || !formData.legalChallenge || !formData.projectDetails) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to our terms to proceed with your consultation request.",
        variant: "destructive",
      });
      return;
    }

    submitConsultationMutation.mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      legalChallenge: formData.legalChallenge,
      projectDetails: formData.projectDetails,
      agreedToTerms: formData.agreedToTerms ? "true" : "false",
    });
  };

  return (
    <section id="contact" className="section-spacing bg-muted dark:bg-muted transition-colors duration-300">
      <div className="content-max-width mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-light text-foreground dark:text-foreground mb-8 tracking-tight leading-tight">
              Ready to Simplify Your 
              <span className="font-normal text-bronze"> Legal Processes?</span>
            </h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-12 leading-relaxed font-light">
              Tell us about what you're looking for, and we will get back to you soon with solutions and ideas.
            </p>

            <div className="space-y-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Consultation Services",
                  description: "Contact us for legal consultation",
                  color: "bg-bronze",
                },
                {
                  icon: Mail,
                  title: "Business Inquiries",
                  description: "info@vidmaconsulting.com",
                  color: "bg-teal",
                },
                {
                  icon: MapPin,
                  title: "Professional Services",
                  description: "Technology-enabled legal solutions",
                  color: "bg-navy",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-10 h-10 ${contact.color} rounded-2xl flex items-center justify-center`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <contact.icon className="text-white text-base" />
                  </motion.div>
                  <div>
                    <div className="font-medium text-foreground dark:text-foreground text-sm">{contact.title}</div>
                    <div className="text-muted-foreground dark:text-muted-foreground font-light text-sm">{contact.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <motion.div
              className="bg-card dark:bg-card rounded-2xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-8 h-8 bg-charcoal rounded-xl flex items-center justify-center">
                  <Calendar className="text-white text-sm" />
                </div>
                <div>
                  <div className="font-medium text-foreground dark:text-foreground text-sm">Professional Consultation</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground">Expert legal and business advisory services</div>
                </div>
              </div>
              <div className="text-xs text-bronze flex items-center">
                <CheckCircle size={10} className="mr-1" />
                Quality services with highest integrity
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-card dark:bg-card rounded-3xl shadow-sm p-10 border border-border"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-foreground dark:text-foreground mb-8 tracking-tight">Contact Us</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-xs font-medium text-foreground dark:text-foreground mb-2 tracking-wide uppercase">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                    className="w-full focus:ring-1 focus:ring-bronze focus:border-transparent border-charcoal/10 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Smith"
                    className="w-full focus:ring-2 focus:ring-bronze focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                  Company *
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full focus:ring-2 focus:ring-bronze focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full focus:ring-2 focus:ring-bronze focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full focus:ring-2 focus:ring-bronze focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="legalChallenge" className="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                  Legal Challenge *
                </Label>
                <Select value={formData.legalChallenge} onValueChange={(value) => setFormData({ ...formData, legalChallenge: value })}>
                  <SelectTrigger className="w-full focus:ring-2 focus:ring-bronze focus:border-transparent">
                    <SelectValue placeholder="Select your primary need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate-law">Corporate Law & Governance</SelectItem>
                    <SelectItem value="ma-transactions">M&A Transactions</SelectItem>
                    <SelectItem value="compliance-risk">Compliance & Risk Management</SelectItem>
                    <SelectItem value="international-expansion">International Expansion</SelectItem>
                    <SelectItem value="contract-negotiation">Contract Negotiation</SelectItem>
                    <SelectItem value="ip-technology">IP & Technology Law</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="projectDetails" className="block text-sm font-semibold text-foreground dark:text-foreground mb-2">
                  Project Details *
                </Label>
                <Textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Briefly describe your legal challenge and timeline..."
                  rows={4}
                  className="w-full focus:ring-2 focus:ring-bronze focus:border-transparent resize-none"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked === true })}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed">
                  I agree to receive communications about Vidma Consulting Group services and understand that consultation details will remain confidential.
                </Label>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={submitConsultationMutation.isPending}
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-white py-4 rounded-2xl font-medium disabled:opacity-50 transition-all duration-200"
                >
                  {submitConsultationMutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Calendar className="mr-2" size={18} />
                      Submit Request
                    </>
                  )}
                </Button>
              </motion.div>

              <div className="text-center text-sm text-muted-foreground dark:text-muted-foreground flex items-center justify-center">
                <Lock className="mr-1" size={16} />
                All communications are kept strictly confidential
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

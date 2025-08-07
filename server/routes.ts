import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation request routes
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const requestData = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await storage.createConsultationRequest(requestData);
      res.status(201).json(consultationRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid request data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to create consultation request" 
        });
      }
    }
  });

  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve consultation requests" 
      });
    }
  });

  app.get("/api/consultation-requests/:id", async (req, res) => {
    try {
      const request = await storage.getConsultationRequest(req.params.id);
      if (!request) {
        res.status(404).json({ message: "Consultation request not found" });
        return;
      }
      res.json(request);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve consultation request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

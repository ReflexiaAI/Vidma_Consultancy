import { type User, type InsertUser, type ConsultationRequest, type InsertConsultationRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequest(id: string): Promise<ConsultationRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private consultationRequests: Map<string, ConsultationRequest>;

  constructor() {
    this.users = new Map();
    this.consultationRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values());
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getConsultationRequest(id: string): Promise<ConsultationRequest | undefined> {
    return this.consultationRequests.get(id);
  }
}

export const storage = new MemStorage();

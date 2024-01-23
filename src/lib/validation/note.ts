import { z } from "zod";

// create
export const createNoteSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});
export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

// update
export const updateNoteSchema = createNoteSchema.extend({
  id: z.string().min(1),
});

// delete
export const deletNoteSchema = z.object({
  id: z.string().min(1),
});

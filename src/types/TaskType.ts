export type TaskType = {
    id: string;
    name: string;
    description?: string;
    status: boolean;
    createdAt?: string;
    updatedAt?: string;
    completedAt?: string;
    category: string;
}
export type CategoryType = {
    id: string;
    name: string;
    color:string;
    tasks?: TaskType[];
}

export type TaskType = {
    id: string;
    name: string;
    description: string;
    date_of_finish : Date;
    status: boolean;
    category: CategoryType;
}
export type Params = {
    name: string;
    description: string;
}

export const createUnit = ({name, description}: Params) => {
    return {
        id: Math.round(Math.random() * 1000),
        name,
        description
    }
}

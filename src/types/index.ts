export type questionProps = {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: [string]
}

export type dbProps = {
    db: {
        bg: string;
        title: string;
        description: string;
        questions: [
            questionProps
        ];
        external: [];
        theme: {
            colors: {
                primary: string;
                secondary: string;
                mainBg: string;
                contrastText: string;
                wrong: string;
                success: string;
            };
            borderRadius: string;
        };
    }
} 
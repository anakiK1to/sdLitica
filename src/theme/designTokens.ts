const designTokens = {
    colors: {
        primary_base: '#48a1d3',
        primary_foreground: '#ADD5ED',
        primary_background: '#0F2D3E',
        secondary_background: '#e6e5e5',
        secondary_foreground: '#7b7474',
        tertiary_background: '#dbd2d2',
        tertiary_foreground: '#9c9696',
        destructive_base: '#da282b',
        destructive_background: '#ff999c',
        destructive_foreground: '#430c0d',
        positive_base: '#3de496',
        positive_background: '#a5f3cf',
        positive_foreground: '#0c5a36',
        warning_base: '#da9928',
        warning_background: '#eed4a7',
        warning_foreground: '#573d0f',
    },
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif',
        fontSize: {
            display_1: '128px',
            small: '12px',
            medium: '16px',
            large: '20px',
        },
        fontWeight: {
            light: 300,
            regular: 400,
            bold: 700,
        },
    },
    fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
    },
    spacing: (factor: number) => `${factor * 8}px`,
    borderRadius: '4px',
}

export default designTokens;

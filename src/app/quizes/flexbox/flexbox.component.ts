import { Component } from '@angular/core';
type Style = {
  container: string;
  items: string;
};

type Answer = {
  container: string;
  items: string;
  correct: boolean;
  hide?: boolean;
};

type Question = {
  number: number;
  longItem?: boolean;
  q?: string;
  answers: Answer[];
};

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
})
export class FlexboxComponent {
  styles: Style[] = [
    {
      container: `
  align-items: center;
  display: flex;
  gap: 5rem;
  padding: 0.5rem;`,
      items: `
  flex-shrink: 0;
  flex-basis: 15rem;`,
    },
    {
      container: `
  align-items: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;`,
      items: `
  flex-basis: 90px;
  flex-shrink: 0;`,
    },
    {
      container: `
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;`,
      items: `
  `,
    },
    {
      container: `
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 3rem;
  padding: 0.5rem;`,
      items: `
  flex-grow: 1;`,
    },
    {
      container: `
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20rem;
  justify-content: center;`,
      items: `
  flex-basis: 10rem;`,
    },
  ];

  questions: Question[] = [
    {
      number: 1,
      longItem: true,
      answers: [
        {
          container: `  
  display: flex;
  gap: 1rem 2rem;
`,

          items: ``,
          correct: false,
        },
        {
          container: this.styles[0].container,
          items: this.styles[0].items,
          correct: true,
        },
        {
          container: `
  display: flex;
  gap: 20px;
  justify-content: space-around;`,

          items: `
  flex-grow: 0`,
          correct: false,
        },
      ],
    },
    {
      number: 2,
      answers: [
        {
          container: this.styles[1].container,
          items: this.styles[1].items,
          correct: true,
        },
        {
          container: `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0.5rem;`,
          items: `
  flex-shrink: 0;
  flex-grow: grow;`,
          correct: false,
        },
        {
          container: `
  display: flex;
  flex-direction: column;`,

          items: `
  flex-shrink: 0;
  flex-wrap: wrap;`,
          correct: false,
        },
      ],
    },
    {
      number: 3,
      longItem: true,
      answers: [
        {
          container: `
  align-items: center;
  display: flex;
  gap: 1rem 2rem;
          `,
          items: `
  flex-shrink: 0;`,
          correct: false,
        },
        {
          container: `
  align-items: center;
  display: flex;
  gap: 1rem 2rem;
  justify-content: space-between;`,

          items: `
  `,
          correct: false,
        },
        {
          container: this.styles[2].container,
          items: this.styles[2].items,
          correct: true,
        },
      ],
    },
    {
      number: 4,
      longItem: true,
      answers: [
        {
          container: `
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  padding: 0.5rem;`,
          items: `
  flex-grow: 0;`,
          correct: false,
        },

        {
          container: this.styles[3].container,
          items: this.styles[3].items,
          correct: true,
        },

        {
          container: `
  display: flex;
  gap: 1rem 2rem;
  justify-content: center;
  padding: 0.5rem;`,
          items: `
  `,
          correct: false,
        },
      ],
    },
    {
      number: 5,
      answers: [
        {
          container: `
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20rem;
  justify-content: space-between;`,
          items: `
  flex-basis: 10rem;`,
          correct: false,
          // hide: true,
        },

        {
          container: this.styles[4].container,
          items: this.styles[4].items,
          correct: true,
        },

        {
          container: `
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20rem;
  justify-content: space-around;`,
          items: `
  flex-basis: 10rem;`,
          correct: true,
          hide: true,
        },
      ],
    },
  ];

  parseStyles(cssString: string): { [key: string]: string } {
    const parsedStyles: { [key: string]: string } = {};

    const stylesArray = cssString
      .split(';')
      .filter((style) => style.trim() !== '');

    stylesArray.forEach((style) => {
      const [property, value] = style.split(':').map((s) => s.trim());
      parsedStyles[property] = value;
    });

    return parsedStyles;
  }
}

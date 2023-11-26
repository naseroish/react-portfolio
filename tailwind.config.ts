import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        //gradient
        'darkblue':'#103783',
        'dark2blue':'#114b63',
        'light1blue':'#4a68b4',
        'light2blue':'#9bafd9',

        //Dark theme colors
        // bg-gray-900     second background for footer live button background
        // bg-gray-800     main background for body and skills labels background also github button background
        // bg-gray-700     skills card background and projects also inputs fields for contact 

        //text-white
      },
    },
  },
  
  
  plugins: [require("daisyui")],
}
export default config

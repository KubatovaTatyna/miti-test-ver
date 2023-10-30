import '@styles/global.css';

export const metadata = {
    title: 'Miti',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
export async function sendTelegramMessage(message) {

    console.log(message)

    const TOKEN = '8830820240:AAGjLvWsWCAMmARjGyXBJm5Q62dJGaUMMvo'
    const CHAT_ID = '6584093010'
  
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })
  }
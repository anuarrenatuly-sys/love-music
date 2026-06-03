export async function sendTelegramMessage(message) {

  try {

    console.log(message)

    const TOKEN =
      '8720379192:AAE5UeUxxyvGFVYnI9hKnlPNm9eb_fkXJZ4'

    const CHAT_ID = '5594857511'

    const url =
      `https://api.telegram.org/bot${TOKEN}/sendMessage`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })

    const data = await response.json()

    console.log(data)

  } catch (error) {

    console.log(error)

    alert('Telegram error')

  }

}
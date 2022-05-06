export const makeRandomList = originalArray => {
   let array = [...originalArray]
   let currentIndex = array.length,
      randomIndex

   while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
   }

   return array
}

const renderData = type => {
   let abcList = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
   ]

   const character = () => abcList[Math.floor(Math.random() * 26)]
   const number = () => Math.floor(Math.random() * 10000)

   switch (type) {
      case 'email':
         return character() + character() + character() + character() + character() + number()

      case 'username':
         return (
            character().toUpperCase() +
            character() +
            character() +
            character() +
            character() +
            number()
         )

      case 'gender':
         return Math.floor(Math.random() * 2) === 1 ? 'male' : 'female'

      default:
         return
   }
}

export const renderGuestUser = () => ({
   username: renderData('username'),
   email: renderData('email'),
   password: 'asdasd',
   gender: renderData('gender'),
})

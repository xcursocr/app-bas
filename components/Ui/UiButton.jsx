import { Text, TouchableOpacity } from 'react-native'


export function UiButton({ text, router }) {

  return (
    <TouchableOpacity onPress={router} className='dark:bg-yellow-200 bg-slate-700  p-2 my-8 rounded-2xl'>
      <Text className='dark:text-gray-900 text-gray-100 text-center font-normal text-xl'>{text}</Text>
    </TouchableOpacity>
  )
}
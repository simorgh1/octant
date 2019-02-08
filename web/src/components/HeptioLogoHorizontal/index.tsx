import React from 'react'

interface Props {
  className?: string
}

export default function HeptioLogoHorizontal({ className }: Props) {
  return (
    <svg className={className} viewBox='0 0 680 170' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <path id='a' d='M340 .3H0v133.2h680V.3z' />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path
          className='logo--fill'
          d={
            'M243.8 131.7h-24v-53c0-7.4-1.5-12.9-4.2-16.4a14 14 0 0 0-11.7-5.3c-2.2 0-4.5.4-6.9 1.4-2.4 ' +
            '1-4.6 2.3-6.8 4a34.5 34.5 0 0 0-6 6.3c-1.7 2.4-3 5-4 7.9v55h-24V.4h24v54.5a36.3 36.3 0 0 1 14.2-14.1 ' +
            '39.9 39.9 0 0 1 34.7-1.8c3.8 2 6.8 4.9 9 8.3 2.1 3.5 3.6 7.5 4.5 12 .8 4.4 1.2 9 1.2 13.6v58.9M328.7 ' +
            '76.6c-.6-7.1-3.2-12.8-7.8-17a24 24 0 0 0-16.8-6.4 24 24 0 0 0-24.3 23.4h49zm-24.4 56.9c-7.6 ' +
            '0-14.4-1.3-20.6-4A47 47 0 0 1 254.6 85c0-6.7 1.1-13 3.4-19a46.3 46.3 0 0 1 25.7-26.3c6.1-2.7 13-4 ' +
            '20.7-4 7.7 0 14.6 1.3 20.7 4a45.2 45.2 0 0 1 25.2 26.1 51.6 51.6 0 0 1 2.7 26.4h-72.9a28 28 0 0 0 ' +
            '2.7 10 24.4 24.4 0 0 0 22.4 13.6c4.8 0 9.3-1.2 13.6-3.5 4.2-2.3 7.1-5.4 8.7-9.3l20.7 5.8a42 42 0 0 ' +
            '1-16.7 17.7c-7.6 4.6-16.7 7-27.2 7zM412.5 113c3.6 0 7-.8 10-2.4 3-1.6 5.6-3.7 7.8-6.3a33 33 0 0 0 ' +
            '4.9-31 25.6 25.6 0 0 0-24.1-17 24.8 24.8 0 0 0-13.7 4.5c-2 1.4-4 3-5.5 5a21 21 0 0 0-3.7 6.3v22.1a32 ' +
            '32 0 0 0 9.9 13.4c4.4 3.6 9.2 5.3 14.4 5.3zm8 20.5a35.2 35.2 0 0 1-32.4-18.4V170h-24V37.3h21v16.2a37.5 ' +
            '37.5 0 0 1 32.6-17.8c6.4 0 12.2 1.3 17.6 3.9 5.4 2.6 10 6 14 10.4a53.3 53.3 0 0 1 12.5 34.3c0 6.9-1 ' +
            '13.3-3 19.3-2.1 6-5 11.2-8.6 15.6a36.5 36.5 0 0 1-29.6 14.2zM529.7 126.8c-3.2 1.4-7.2 2.9-11.9 4.3a50 ' +
            '50 0 0 1-14.7 2.2c-3.4 0-6.6-.4-9.5-1.3a19.7 19.7 0 0 1-13-11.3 26 26 0 0 ' +
            '1-2-10.6V55.9h-12.4V37.3h12.4V6.7h24.1v30.6h19.8V56h-19.8v46c0 3.4.9 5.8 2.6 7.2a10 10 0 0 0 ' +
            '6.4 2c2.5 0 5-.4 7.4-1.2l5.7-2.2 4.9 19.1M541.1 131.7h24.1V37.3h-24v94.4zm0-107.5h24.1V.2h-24v24z'
          }
          fill='#FFF'
        />
        <g>
          <path
            className='logo--fill'
            d={
              'M606 84.7c0 4.2.6 8 2 11.4a28 28 0 0 0 5.1 9 23.3 23.3 0 0 0 35.1 0c2.2-2.6 4-5.6 ' +
              '5.2-9 1.3-3.6 2-7.4 2-11.6 0-4-.7-7.9-2-11.3-1.2-3.5-3-6.5-5.2-9a23.4 23.4 0 0 0-17.5-8c-3.5 ' +
              '0-6.7.8-9.7 2.2-3 1.4-5.7 3.4-7.9 6-2.2 2.5-4 5.5-5.2 9a33 33 0 0 0-1.9 11.3zm24.7 48.8c-7.7 ' +
              '0-14.6-1.4-20.7-4a46.4 46.4 0 0 1-25.4-26.3 50.8 50.8 0 0 1 0-37.2 47.2 47.2 0 0 1 46-30.3c7.8 0 ' +
              '14.6 1.3 20.7 4A46.8 46.8 0 0 1 676.6 66a51.4 51.4 0 0 1-9.7 52.8c-4.2 4.5-9.4 8-15.5 10.7-6.1 2.6-13 ' +
              '4-20.7 4zM25 78.3v25.3h36.7l-4.3 7c-4 6.7-7.3 13.6-10.1 20.8H0V.3h47.3c2.8 7.1 6.2 14 10.1 20.7l4.3 ' +
              '7H25v25.3h72V34.5l-1.5-1.4a93.6 93.6 0 0 1-17.7-26L74.4.3H122v131.1H74.4l3.4-6.8a121.2 121.2 0 0 1 ' +
              '17.7-26L97 97V78.3H25'
            }
            fill='#FFF'
          />
        </g>
      </g>
    </svg>
  )
}

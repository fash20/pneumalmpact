import { defaultTheme, mergeTheme } from "evergreen-ui";

export const uiTheme = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          primary: {
            color: 'white',
            paddingX: 12,
            paddingY: 8,
            borderRadius: 50,
            height: 50,
            fontSize: 18,
            fontWeight:'600',
            backgroundColor: '#2F327D',
            _hover: {
              backgroundColor: '#3e41a4',
            },
            _active: {
              backgroundColor: '#2F327D',
            },
            _focus: {
              boxShadow: '0 0 0 2px #2F327D',
            },
          },
          secondary: {
            color: 'white',
            paddingX: 12,
            paddingY: 8,
            borderRadius: 50,
            height: 50,
            fontSize: 18,
            fontWeight:'600',
            backgroundColor: '#FF5364',
            _hover: {
              backgroundColor: '#FF5344',
            },
            _active: {
              backgroundColor: '#FF5364',
            },
            _focus: {
              boxShadow: '0 0 0 2px #2F327D',
            },
          },
          loginButton1: {
            color: '#6C6C6C',
            paddingX: 12,
            paddingY: 8,
            borderRadius: 20,
            height: 30,
            width: 90,
            fontSize: 14,
            fontWeight:'400',
            backgroundColor: '#fff',
            boxShadow: "0px 15px 18px rgba(0, 0, 0, 0.03)",
            _hover: {
              backgroundColor: '#fff',
            },
            // _active: {
            //   backgroundColor: '#2F327D',
            // },
            // _focus: {
            //   boxShadow: "0px 15px 18px rgba(0, 0, 0, 0.03)"
            // },
          },
          loginButton2: {
            color: '#fff',
            paddingX: 12,
            paddingY: 8,
            borderRadius: 20,
            height: 30,
            width: 90,
            fontSize: 14,
            fontWeight:'400',
            backgroundColor: '#2F327D',
            textAlign:"center",
            _hover: {
              backgroundColor: '#3e41a4',
            },
            _active: {
              backgroundColor: '#2F327D',
            },
            _focus: {
              boxShadow: '0 0 0 2px #2F327D',
            },
          },
          loginIconButton:{
            height: 40,
            width: 200
          }
        },
      },
      TextInputField:{
    }
    },
  })


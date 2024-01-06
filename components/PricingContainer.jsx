import { Box, Button, Divider, Flex, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import Switch from "react-switch"
import Link from "next/link";



export const PricingContainer = () => {
   const theme = useMantineTheme()
   const [monthly, setMonthly] = useState(false)

   const handleChange = () => {
      setMonthly(!monthly)
   }

   return (
      <>
         <Group
            sx={{ zIndex: 50 }}
         >
            <Stack spacing={40} >
               {/** header section */}
               <Flex
                  direction='column'
                  gap={10}
                  align='center'
                  justify='start'
               >
                  <img src="./seguidores-peru.svg" alt="Seguidores Perú" width="300" height="118" />

                  <Title
                     order={2}
                     color= {theme.colorScheme === 'dark' ? 'white' : 'hsl(233, 13%, 49%)'}
                  >Nuestros Precios</Title>
                  <Box
                     sx={{
                        fontWeight: 700,
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[1]: 'hsl(234, 14%, 74%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 19
                     }}
                  >
                     <Text fz={'sm'}>Pago Único</Text>
                     <Switch
                        checked={monthly}
                        onChange={handleChange}
                        checkedIcon={null}
                        uncheckedIcon={null}
                        boxShadow=''
                        activeBoxShadow=''
                        width={45}
                        height={25}
                        onColor={'#7F85E4'}
                        offColor={'#7F85E4'}
                        handleDiameter={18}
                     />
                     <Text fz={'sm'}>Mensual</Text>
                  </Box>
               </Flex>
               <Link href={'https://wa.link/tjruyo'}>
                              <Button
                                 variant='gradient'
                                 gradient={{ from: 'hsl(236, 72%, 79%)', to: 'hsl(237, 63%, 64%)' }}
                                 w='100%'
                              >
                                 COMPRAR POR WHATSAPP
                              </Button>
                           </Link>
               {/** cards section */}
               <Group>
                  <Flex
                     align={'center'}
                     direction={{ base: 'column', sm: 'row' }}
                     color={'hsl(232, 13%, 33%)'}
                     gap={{base: '1.5rem', sm: 0}}
                  >
                     <Box
                        sx={{
                           boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                           height: '22rem',
                           width: '17rem',
                           paddingInline: '1.5rem',
                           backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
                           borderRadius: '0.7rem 0 0 0.7rem',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',

                           '@media (max-width: 755px)': {
                              width: '19rem',
                              borderRadius: '0.7rem',
                           },
                           '@media (min-width: 756px) and (max-width: 820px)': {
                              width: '15rem',
                              borderRadius: '0.7rem 0 0 0.7rem',
                           },
                        }}
                     >
                        <Stack w={'100%'} align={'center'} spacing={20}>
                           <Text sx={{
                              fontWeight: 700,
                              color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : 'hsl(233, 13%, 49%)',
                           }} fz={'sm'}>1,000 Seguidores Instagram</Text>
                           <Title
                              order={2}
                              sx={{
                                 color: theme.colorScheme === 'dark' ? 'white' : 'hsl(232, 13%, 33%)',
                                 fontSize: 50,
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 5
                              }}
                           >
                              {monthly ? '19.90' : '24.90'}
                              <Text fz={'2rem'}>Soles</Text>
                           </Title>
                           <Stack w={'100%'} align='center' spacing={10} sx={{color: theme.colorScheme === 'light' && 'hsl(233, 13%, 49%)'}}>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                              <Text fz={'sm'} fw={600} >Seguidores Premium</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                              <Text fz={'sm'} fw={600} >No se requiere contraseña</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                              <Text fz={'sm'} fw={600} >Entrega Rápida Garantizada</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                           </Stack>
                           <Link href={'https://wa.link/tjruyo'}>
                              <Button
                                 variant='gradient'
                                 gradient={{ from: 'hsl(236, 72%, 79%)', to: 'hsl(237, 63%, 64%)' }}
                                 w='100%'
                              >
                                 COMPRAR AHORA
                              </Button>
                           </Link>
                        </Stack>
                     </Box>
                     <Box
                        sx={{
                           boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                           height: '25rem',
                           width: '19rem',
                           paddingInline: '1.5rem',
                           background: 'linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
                           color: 'white',
                           borderRadius: '0.7rem',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           
                           '@media (min-width: 756px) and (max-width: 820px)': {
                              width: '15rem',
                              borderRadius: '0.7rem',
                           },
                        }}
                     >
                        <Stack w={'100%'} align={'center'} spacing={20}>
                           <Text sx={{
                              fontWeight: 700,
                           }} fz={'sm'}>5,000 Seguidores Instagram</Text>
                           <Title
                              order={2}
                              sx={{
                                 fontSize: 50,
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 5
                              }}
                           >
                              
                              {monthly ? '79.90' : '99.90'}
                              <Text fz={'2rem'}>Soles</Text>
                           </Title>
                           <Stack w={'100%'} align='center' spacing={10}>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' && 'white', opacity: theme.colorScheme === 'dark' && 0.6 }} />
                              <Text fz={'sm'} fw={600}>Seguidores Premium</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' && 'white', opacity: theme.colorScheme === 'dark' && 0.6 }} />
                              <Text fz={'sm'} fw={600}>No se requiere contraseña</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' && 'white', opacity: theme.colorScheme === 'dark' && 0.6 }} />
                              <Text fz={'sm'} fw={600}>Entrega Rápida Garantizada</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' && 'white', opacity: theme.colorScheme === 'dark' && 0.6 }} />
                           </Stack>
                           <Link href={'https://wa.link/cz0m6o'}>
                           <Button
                              sx={{
                                 backgroundColor: 'white',
                                 color: 'hsl(237, 63%, 64%)',

                                 '&:hover': {
                                    backgroundColor: 'white',
                                    opacity: 0.95
                                 }
                              }}
                              w='100%'
                           >
                              COMPRAR AHORA
                           </Button>
                           </Link>
                        </Stack>
                     </Box><Box
                        sx={{
                           boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                           height: '22rem',
                           width: '18rem',
                           paddingInline: '1.5rem',
                           backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
                           borderRadius: '0 0.7rem 0.7rem 0',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',

                           '@media (max-width: 755px)': {
                              width: '19rem',
                              borderRadius: '0.7rem',
                           },
                           '@media (min-width: 756px) and (max-width: 820px)': {
                              width: '15rem',
                              borderRadius: '0 0.7rem 0.7rem 0',
                           },
                        }}
                     >
                        <Stack w={'100%'} align={'center'} spacing={20}>
                           <Text sx={{
                              fontWeight: 700,
                              color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : 'hsl(233, 13%, 49%)',
                           }} fz={'sm'}>10,000 Seguidores Instagram</Text>
                           <Title
                              order={2}
                              sx={{
                                 color: theme.colorScheme === 'dark' ? 'white' : 'hsl(232, 13%, 33%)',
                                 fontSize: 50,
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 5
                              }}
                           >
                              {monthly ? '169.90' : '189.90'}
                              <Text fz={'2rem'}>Soles</Text>
                           </Title>
                           <Stack w={'100%'} align='center' spacing={10} sx={{color: theme.colorScheme === 'light' && 'hsl(233, 13%, 49%)'}}>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                              <Text fz={'sm'} fw={600} >Seguidores Premium</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                              <Text fz={'sm'} fw={600} >No se requiere contraseña</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                              <Text fz={'sm'} fw={600} >Entrega Rápida Garantizada</Text>
                              <Divider sx={{ width: '100%', borderColor: theme.colorScheme === 'dark' &&'gray', opacity: theme.colorScheme === 'dark' && 0.7 }} />
                           </Stack>
                           <Link href={'https://wa.link/qpdd19'}>
                              <Button
                                 variant='gradient'
                                 gradient={{ from: 'hsl(236, 72%, 79%)', to: 'hsl(237, 63%, 64%)' }}
                                 w='100%'
                              >
                                 COMPRAR AHORA
                              </Button>
                           </Link>
                        </Stack>

                     </Box>
                  </Flex>
               </Group>
            </Stack>
         </Group>
      </>
   )
}

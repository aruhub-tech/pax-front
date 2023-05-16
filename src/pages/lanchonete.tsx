import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Footer from '@/Components/Footer';
import Header from '@/Components/header';

export default function Planos() {
  return (
    <>
      <Head>
        <title>Pax União - Eternizar Memórias é um Ato de Amor!</title>
        <meta
          name="description"
          content="Precisa de ajuda com ações de veículos apreendidos e revisional? Nossos advogados especializados estão prontos para ajudá-lo a obter a melhor solução para o seu caso. Entre em contato conosco agora mesmo para uma consulta gratuita."
        />
        <meta
          name="keywords"
          content="ações de veículos apreendidos, revisional, advogados especializados, consultoria jurídica"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Container maxW="container.lg">
        <Flex
          as="section"
          direction="column"
          justify="center"
          align="center"
          mt={10}
        >
          <Flex py={10} justify="center" align="center">
            <Heading size="2xl" mb="4" color="black" fontWeight="extrabold">
              Lanchonete
            </Heading>
          </Flex>
          <Stack spacing={4} align="center">
            <Img
              htmlWidth="500px"
              htmlHeight="320px"
              height={{
                md: '320px',
              }}
              objectFit="cover"
              src="/complexo-2.png"
              alt="Imagem da central de velórios da pax união do canto da fabril em são luís."
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
              borderBottomRightRadius={20}
            />
            <Box width="100%">
              <Text
                fontSize={{
                  md: 'lg',
                }}
                mb="6"
              >
                A perda de um ente querido é uma das experiências mais difíceis
                pela qual podemos passar na vida. E, em meio a todo o processo
                de luto, é importante contar com o apoio de profissionais que
                entendam a importância desse momento e possam oferecer suporte
                em todas as etapas. É nesse sentido que a pax união se destaca,
                oferecendo um atendimento completo e cuidadoso aos seus
                clientes. <br /> <br />
                Muitos não sabem, mas a Pax União conta com uma lanchonete
                própria, pensada para atender às necessidades dos nossos
                clientes e parceiros. E não se trata de uma simples lanchonete,
                mas sim de um espaço cuidadosamente planejado para oferecer
                conforto e acolhimento em todos os momentos. <br /> <br />
                Ao entrar na nossa lanchonete, o primeiro aspecto que chama a
                atenção é a decoração cuidadosa e discreta, que busca criar um
                ambiente acolhedor e tranquilo. As cores são suaves, os móveis
                são confortáveis e há detalhes que remetem ao tema esperança.{' '}
                <br /> <br />
                Mas o ponto alto da lanchonete não é a decoração, e sim a
                qualidade dos produtos oferecidos. Ao contrário do que se pode
                imaginar, não se trata de uma lanchonete comum, com opções
                apenas de fast food e refrigerantes. Pelo contrário, investimos
                em produtos de alta qualidade e preparados com cuidado e
                carinho. <br /> <br />
                Os funcionários são treinados para oferecer um atendimento
                atencioso e empático, entendendo que os clientes que passam por
                ali estão em um momento singular e que precisam do máximo apoio.{' '}
                <br /> <br />
                Assim, além de se preocupar com a qualidade dos produtos
                oferecidos, também buscamos oferecer um ambiente acolhedor e uma
                experiência positiva aos seus clientes. <br /> <br />
                É comum ver funcionários conversando com os clientes, oferecendo
                um ombro amigo ou simplesmente escutando as histórias e memórias
                que eles têm do ente querido. <br /> <br />
                Assim, ao oferecer um ambiente acolhedor e produtos de
                qualidade, a lanchonete da PAX união contribui para que as
                memórias daqueles que se foram possam ser guardadas com carinho
                e ternura. E, como diz o nosso lema, &ldquo;eternizar memórias é
                um ato de amor&ldquo;. E é exatamente isso que buscamos oferecer
                aos nossos clientes: não apenas um serviço de qualidade, mas
                também um suporte emocional e uma forma de honrar a memória
                daqueles que partiram. <br /> <br />
              </Text>
            </Box>
          </Stack>
        </Flex>
        <Divider />

        <Box as="section">
          <Flex
            direction="column"
            justify="space-between"
            px={10}
            py={10}
            bgColor="primary.dark"
          >
            <Box>
              <Heading size="lg" mb="4" color="white">
                Conheça nosso Complexo
              </Heading>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: '16', lg: '16' }}
              mx="auto"
              justifyItems="center"
              alignItems="center"
            >
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/pomba.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Central de Velórios
                </Text>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/lanchonete.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Lanchonete
                </Text>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/flores.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Floricultura
                </Text>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/lapide.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Memorial
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
        <Divider />
      </Container>

      <Container maxW="container.lg">
        <Divider />
      </Container>

      <Flex w="100%" mb={20}>
        <Container maxW="container.lg">
          <Box as="section" py="8" mb={5}>
            <Flex
              py={6}
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Stack spacing={4} align="center">
                <Text fontWeight="extrabold" fontSize="4xl">
                  ATENDIMENTO 24H
                </Text>
                <Text>Floricultura - Laboratório - Lanchonete</Text>
                <Button bgColor="primary.dark" color="white">
                  Entre em Contato
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Container>
      </Flex>

      <Footer />
    </>
  );
}
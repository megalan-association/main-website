import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, useDisclosure, CardFooter, Link} from "@nextui-org/react";
import Image from 'next/image'

type Props = {
  index: number,
  title: string,
  description: string,
  image: string,
  link: string | null,
}

export default function EventCard({index, title, description, image, link} : Props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div className="flex h-fit">
      <Card
        radius="lg"
        className="border-none bg-neutral-600 w-[300px] h-[200px]"
        classNames={{body: "m-0 p-0"}}
        isPressable
        onPress={onOpen}
      >
        <CardBody className="overflow-clip">
          <Image fill={true} src={image} alt={title + " event image"}></Image>
        </CardBody>
        <CardFooter className="justify-between text-white bg-black bg-opacity-60 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p>{title}</p>
        </CardFooter>
      </Card>
      <Modal 
        isOpen={isOpen} 
        placement="bottom-center"
        isDismissable={true}
        onOpenChange={onOpenChange}
        size="3xl"
      >
        <ModalContent className="bg-neutral-800 text-white h-[70vh] sm:h-auto overflow-y-scroll sm:overflow-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">{title}</ModalHeader>
              <ModalBody className="overflow-y-scroll sm:overflow-auto">
                <p className="whitespace-pre-line"> 
                  {description}
                </p>
                {link && <Link href="https://www.start.gg/tournament/megalan-2024-t1-might-and-magic">https://www.start.gg/tournament/megalan-2024-t1-might-and-magic</Link>}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

"use client";
import React, { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ImageCarousel from "./ImageCarousel";
import SocialMediaIcon from "./Socials";
import { FaFacebook, FaInstagram } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  socData: any;
}

const SocModal: FC<ModalProps> = ({ isOpen, onClose, socData }) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      size="5xl"
      scrollBehavior="inside"
      className="bg-neutral-800"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white text-3xl sm:text-5xl">
              {socData}
            </ModalHeader>
            <ModalBody>
              <ImageCarousel />

              <div className="text-wrap text-lg p-4 container text-white">
                Pokémon! Whether it&apos;s the diversity or the competitiveness,
                the nostalgia or the cuteness, there are so many reasons why we
                love Pokémon! Our growing community is full of passion and
                comfort and is an ideal space for all fans of the franchise to
                get involved and have fun while sharing your Pokémon adventures.
              </div>

              <div className="w-full p-3">
                <span className="text-2xl text-white">Our Social&apos;s</span>
                <div className="flex flex-col h-full justify-between">
                <SocialMediaIcon icon={FaFacebook} name="Facebook" />
                <SocialMediaIcon icon={FaInstagram} name="Instagram" />
                </div>
              </div>
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
  );
};

export default SocModal;

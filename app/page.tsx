import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout backgroundImage="/images/background.png">
      <Container>
        <MemorialHeader
          fullName="Ваня Михайлович Петров"
          birthDate="2025-07-01"
          deathDate="2025-08-05"
          photoUrl="https://zqqyhudmcjwubslcaznh.supabase.co/storage/v1/object/public/memorial_photos/memorial/l_i25vXr5z2_g-o9AtgBp.png"
          birthPlace="Место рождения"
          deathPlace="Место смерти"
        />
        <MemorialInfo />
        <MemorialBio />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialPhotos />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}
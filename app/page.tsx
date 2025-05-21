import FormParameters from "@/components/form-parameters"
import Image from "next/image"

export default function Home() {

  return (
    <section className="grid grid-rows-[auto_1fr_20px] min-h-screen items-center p-6">
      <Image
        src="/nutrimiku-logo.webp"
        alt="nutrimiku-logo"
        width={180}
        height={37}
        priority
        className="row-start-1 object-contain object-center mx-auto"
      />
      <FormParameters />
    </section>
  )
}

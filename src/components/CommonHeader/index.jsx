import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Button } from "../Button";


export default function CommonHeader(){

  return (
    <>
      <header className="mx-auto flex w-full max-w-[1300px] flex-col items-start md:p-5">
        {/* logo and menu section */}
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          <Img src="images/img_group_35684.png" alt="image" className="h-[19px] w-[9%] object-cover md:w-full" />
          <div className="flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <ul className="flex flex-wrap gap-[49px]">
              <li>
                <a href="#" className="cursor-pointer">
                  <Heading as="h6" className="text-center hover:text-yellow-800">
                    Creation Platform
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h6" className="text-center !text-yellow-800">
                    role.ai
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <Heading as="h6" className="text-center hover:text-yellow-800">
                    BRC-1111{" "}
                  </Heading>
                </a>
              </li>
            </ul>
            <div
              className="flex items-center gap-2 rounded-[12px] border border-solid border-blue_gray-100_01 pl-3">
              <Text size="s" as="p" className="h-[17px] !font-sfpro tracking-[0.14px] !text-blue_gray-900_02">
                EN
              </Text>
              <Button
                variant="fill"
                className="min-w-[39px] rounded-bl-[12px] rounded-tl-[12px] font-sfpro font-medium tracking-[0.14px]"
              >
                CN
              </Button>
            </div>
          </div>
        </div>
        <Text size="xs" as="p" className="relative mt-[-3px] text-center !text-blue_gray-700">
          Nuwa Digital Life Labs
        </Text>
      </header>
    </>
  )
}

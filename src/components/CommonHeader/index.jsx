import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Button } from "../Button";
import { message } from "antd";


export default function CommonHeader(){
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Coming Soon',
    });
  };

  return (
    <>
      {contextHolder}
      <header className="mx-auto flex w-full max-w-[1300px] flex-col items-start md:p-5">
        {/* logo and menu section */}
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          <Img src="images/logo.png" alt="image" className="w-[9%] object-cover md:w-full" />
          <div className="flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <ul className="flex flex-wrap gap-[49px]">
              <li>
                <a href="https://create.nuwalabs.org/" target="_blank" className="cursor-pointer">
                  <Heading as="h6" className="text-center hover:text-yellow-800">
                    Creation Platform
                  </Heading>
                </a>
              </li>
              <li>
                <a href="https://roleai.nuwalabs.org/" target="_blank" className="cursor-pointer">
                  {/*<Heading as="h6" className="text-center !text-yellow-800">*/}
                  <Heading as="h6" className="text-center hover:text-yellow-800">
                    role.ai
                  </Heading>
                </a>
              </li>
              <li>
                <a href="https://docs.nuwalabs.org/" target="_blank" className="cursor-pointer">
                  <Heading as="h6" className="text-center hover:text-yellow-800">
                    BRC-1111{" "}
                  </Heading>
                </a>
              </li>
            </ul>
            <div
              className="flex items-center rounded-[12px] border border-solid border-blue_gray-100_01">
              <Button
                variant="fill"
                color="yellow_800"
                className="min-w-[39px] rounded-bl-[12px] rounded-tl-[12px] font-sfpro font-medium tracking-[0.14px] pl-3"
              >
                EN
              </Button>
              <Button
                variant="fill"
                color="blue_gray"
                className="min-w-[39px] rounded-br-[12px] rounded-tr-[12px] font-sfpro font-medium tracking-[0.14px]"
                onClick={success}
              >
                CN
              </Button>
              {/*<Text size="s" as="p" className="h-[17px] !font-sfpro tracking-[0.14px] !text-blue_gray-900_02">
                CN
              </Text>*/}
            </div>
          </div>
        </div>
        {/*<Text size="xs" as="p" className="relative mt-[-3px] text-center !text-blue_gray-700">
          Nuwa Digital Life Labs
        </Text>*/}
      </header>
    </>
  )
}

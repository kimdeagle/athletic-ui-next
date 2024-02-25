import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "@/auth";

const Login = () => {
  async function handleLogin(formData: FormData) {
    "use server";

    await signIn("credentials", formData);
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Card className="w-[350px]">
        <form action={handleLogin}>
          <CardHeader>
            <CardTitle>Athletic</CardTitle>
            <CardDescription>로그인</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="loginId">아이디</Label>
                <Input id="loginId" name="loginId" placeholder="아이디 입력" autoFocus />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" name="password" type="password" placeholder="비밀번호 입력" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" className="w-full">
              로그인
            </Button>
          </CardFooter>
        </form>
        <CardFooter className="flex justify-between">
          <Button variant="link" size="sm">
            <Link href="/">비밀번호 찾기</Link>
          </Button>
          <Button variant="link" size="sm">
            <Link href="/">계정 생성</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

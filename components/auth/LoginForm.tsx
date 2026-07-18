"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();
  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setMessage("");

  const result = await signIn("credentials", {
    email: form.email,
    password: form.password,
    redirect: false,
  });

  if (result?.error) {
    setMessage("Invalid email or password.");
    return;
  }

  setMessage("Login successful!");

  router.push("/");
  router.refresh();
}

  return (
    <Card className="w-[420px] shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Login
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          {message && (
  <p className="text-center text-sm text-blue-600">
    {message}
  </p>
)}

          <Button type="submit" className="w-full">
            Login
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}
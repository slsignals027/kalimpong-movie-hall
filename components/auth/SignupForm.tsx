"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/actions/auth";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  console.log("Submit clicked");
  console.log(form);

  const result = await registerUser(form);

  console.log(result);

  setMessage(result.message);

  if (result.success) {
    setForm({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  }

}

  return (
    <Card className="w-[420px] shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Create Account
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <Label>Full Name</Label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

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
            <Label>Mobile (Optional)</Label>
            <Input
              name="mobile"
              value={form.mobile}
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
            Create Account
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}
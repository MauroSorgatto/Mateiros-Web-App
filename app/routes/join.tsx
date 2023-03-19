import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { validateEmail } from "~/utils";

export async function action({ request }: ActionArgs) {
  const { email, password, name, phonenumber } = await request.json();

  if (!validateEmail(email)) {
    return json(
      {
        errors: {
          email: "Email is invalid",
          password: null,
          name: null,
          phonenumber: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      {
        errors: {
          email: null,
          password: "Password is required",
          name: null,
          phonenumber: null,
        },
      },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      {
        errors: {
          email: null,
          password: "Password is too short",
          name: null,
          phonenumber: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof name !== "string" || name.length === 0) {
    return json(
      {
        errors: {
          email: null,
          name: "Name is required",
          phonenumber: null,
          password: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof phonenumber !== "string" || phonenumber.length === 0) {
    return json(
      {
        errors: {
          email: null,
          phonenumber: "Phone number is required",
          name: null,
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
          phonenumber: null,
          name: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return new Response(
    JSON.stringify(user),
    await createUserSession({
      request,
      userId: user.id,
      remember: false,
    })
  );
}

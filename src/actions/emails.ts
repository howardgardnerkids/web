import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY);

export const contacto = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      firtName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phone: z.string(),
      message: z.string(),
    }),
    handler: async (input) => {
      const { firtName, lastName, email, phone, message } = input;

      const emailFrom = "Solicitud Contacto <contacto@kinderhowardgardner.com>";

      const { data, error } = await resend.emails.send({
        from: emailFrom,
        to: ["howardgardnerkids@gmail.com"],
        subject: "Solicitud contacto " + firtName + " " + lastName,
        html:
          `<p><strong>Nombre:</strong> ${firtName} ${lastName} (<strong>${email}</strong>) </p>` +
          `<p><strong>Telefono:</strong> ${phone}</p>` +
          `<p>${message}</p>`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};

export const adminision = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      NameStudent: z.string(),
      ageStudent: z.number(),
      NameMother: z.string(),
      NameFather: z.string(),
      email: z.string().email(),
      phone: z.string(),
    }),
    handler: async (input) => {
      const { NameStudent, ageStudent, NameMother, NameFather, email, phone } =
        input;

      const emailFrom = "Solicitud Admision <admision@kinderhowardgardner.com>";

      const { data, error } = await resend.emails.send({
        from: emailFrom,
        to: ["howardgardnerkids@gmail.com"],
        subject: "Solicitud admision " + NameStudent,
        html:
          `<p><strong>Estudiante:</strong> ${NameStudent}</p>` +
          `<p><strong>Edad:</strong> ${ageStudent}</p>` +
          `<p><strong>Nombre Madre:</strong> ${NameMother}</p>` +
          `<p><strong>Nombre Padre:</strong> ${NameFather}</p>` +
          `<p><strong>Correo:</strong> ${email}</p>` +
          `<p><strong>Telefono:</strong> ${phone}</p>`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};

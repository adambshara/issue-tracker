// "use client";
// import ErrorMessage from "@/app/components/ErrorMessage";
// import dynamic from "next/dynamic";
// import Spinner from "@/app/components/Spinner";
// import { createIssueschema } from "@/app/validationSchemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button, Callout, TextField } from "@radix-ui/themes";
// import axios from "axios";
// import "easymde/dist/easymde.min.css";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// // import SimpleMDE from "react-simplemde-editor";
// import { z } from "zod";

// // interface IssueForm {
// //   title: string;
// //   description: string;
// // }
// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });

// type IssueForm = z.infer<typeof createIssueschema>;

// const NewIssuePage = () => {
//   const router = useRouter();
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IssueForm>({
//     resolver: zodResolver(createIssueschema),
//   });
//   const [error, setError] = useState("");
//   const [isSubmitting, setSubmitting] = useState(false);

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       setSubmitting(true);
//       await axios.post("/api/issues", data);
//       router.push("/issues");
//     } catch (error) {
//       setSubmitting(false);
//       setError("An unexpected error");
//     }
//   });
//   return (
//     <div className="max-w-xl">
//       {error && (
//         <Callout.Root color="red" className="mb-5">
//           <Callout.Text>{error}</Callout.Text>
//         </Callout.Root>
//       )}
//       <form className=" space-y-3" onSubmit={onSubmit}>
//         <TextField.Root
//           placeholder="Enter your issue"
//           {...register("title")}
//         ></TextField.Root>
//         <ErrorMessage>{errors.title?.message}</ErrorMessage>
//         <Controller
//           name="description"
//           control={control}
//           render={({ field }) => (
//             <SimpleMDE placeholder="Description" {...field} />
//           )}
//         />
//         <ErrorMessage>{errors.description?.message}</ErrorMessage>

//         {/* <SimpleMDE placeholder="Description" /> */}
//         {/* <TextArea placeholder="Description" /> */}
//         <Button disabled={isSubmitting}>
//           Submit New Issue
//           {isSubmitting && <Spinner />}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default NewIssuePage;

import React from "react";
import IssueForm from "../_components/IssueForm";

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;

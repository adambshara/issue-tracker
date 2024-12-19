"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Enter your issue"></TextField.Root>
      <SimpleMDE placeholder="Description" />
      {/* <TextArea placeholder="Description" /> */}
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;

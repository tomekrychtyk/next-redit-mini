"use client";

import {
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Textarea,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          Create a topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h3 className="text-lg">Create a topic</h3>
            <Input
              name="name"
              placeholder="Name"
              labelPlacement="outside"
              label="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              placeholder="Describe your topic"
              labelPlacement="outside"
              label="Description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />

            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}

            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

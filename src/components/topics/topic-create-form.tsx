import {
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Textarea,
} from "@nextui-org/react";
import * as actions from "@/actions";

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          Create a topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h3 className="text-lg">Create a topic</h3>
            <Input placeholder="Name" labelPlacement="outside" label="Name" />
            <Textarea
              placeholder="Describe your topic"
              labelPlacement="outside"
              label="Description"
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

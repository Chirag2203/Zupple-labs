import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
const ScreenOne = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-col3 pt-24 flex flex-col items-center">
      <div className="glass rounded-lg w-4/5 flex flex-col items-center py-4">
        <p className="text-sm">UIDesignDaily</p>
        <p className="text-xl mt-8 font-medium">Upload Files</p>
        <div className="flex gap-8 w-full px-16 mt-12 justify-center">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="grid w-full  items-center gap-2">
              <Label htmlFor="authKey" className="form-label">
                Authorisation Key
              </Label>
              <Input
                id="authKey"
                type="password"
                className="glassInpt"
                placeholder="Enter your authorisation key"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="title" className="form-label">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter title"
                className="glassInpt focus:border-purple-500"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="description" className="form-label">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter description"
                className="min-h-32 bg-transparent focus:border-purple-500 glassInpt"
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="grid w-full  items-center gap-2">
              <Label htmlFor="tags" className="form-label">
                Tags[comma seperated]
              </Label>
              <Input
                id="tags"
                type="password"
                className="glassInpt"
                placeholder="Tags [comma seperated]"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="tags" className="form-label">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className={cn(
                      " justify-start text-left font-normal bg-transparent hover:bg-transparent  glassInpt ",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <Label>DD/MM/YYYY</Label>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="description" className="form-label">
                Description
              </Label>
              <Select>
                <SelectTrigger className=" bg-transparent border-purple-500 glassInpt text-slate-400 ">
                  <SelectValue placeholder="Sketch " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="=">
                    <SelectLabel>Figma</SelectLabel>
                    <SelectItem value="apple">VSCode</SelectItem>
                    <SelectItem value="banana">Postman</SelectItem>
                    <SelectItem value="blueberry">Illustrator</SelectItem>
                  </SelectGroup>
                </SelectContent> 
              </Select>
            </div>
            <div className="flex gap-8">
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="fileInput" className="form-label">
                  Thumbnail image
                </Label>
                <div className="relative mt-2">
                  <Input
                    type="file"
                    id="fileInput"
                    name="fileInput"
                    className="sr-only"
                    accept=".pdf, .doc, .docx"
                  />
                  <Label
                    htmlFor="fileInput"
                    className="cursor-pointer text-slate-400   bg-transparent border px-4 py-2 glassInpt  rounded-md"
                  >
                    Upload file
                  </Label>
                </div>
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="fileInput" className="form-label">
                  Source File
                </Label>
                <div className="relative mt-2">
                  <Input
                    type="file"
                    id="fileInput"
                    name="fileInput"
                    className="sr-only"
                    accept=".pdf, .doc, .docx"
                  />
                  <Label
                    htmlFor="fileInput"
                    className="cursor-pointer text-slate-400  bg-transparent border px-4 py-2 glassInpt  rounded-md"
                  >
                    Upload file
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-purple-800 w-1/3 mt-8 hover:to-purple-700">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ScreenOne;

/*
Used ShadCn for form components, Typescript for typesafe code
Axios for sending data to server, TailwindCSS for styling
framer motion for animations

validateForm() function validates the user input and returns true if all the fields are valid, 
else returns false.

handleSubmit() function is called when the user submits the form. 
It checks if the form is valid and if so, sends the data to the server using axios.

handleFileChange1() and handleFileChange2() functions are called when the user uploads the files. T
hey store the file in the state.

*/

import axios from "axios";

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
import  {motion} from "framer-motion";
import {fadeIn } from "@/utils/motion.js";


import { useState } from "react";
import { CalendarIcon } from "lucide-react";

const ScreenOne = () => {
  const [authKey, setAuthKey] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [software, setSoftware] = useState<string>("");

  // checking for errors, validating form input
  const [errors, setErrors] = useState({
    authKey: "",
    title: "",
    description: "",
    tags: "",
    date: "",
    file1: "",
    file2: "",
    software: "",
  });

  //validates the user input
  const validateForm = () => {
    console.log("Validating form...");
    const newErrors = {
      authKey:
        authKey.length < 8
          ? "Authorization Key must be at least 8 characters"
          : "",
      title: title.length < 3 ? "Title must be at least 3 characters" : "",
      description:
        description.length < 10 || description.length > 100
          ? "Description must be between 10 and 100 characters"
          : "",
      tags:
        typeof tags !== "string"
          ? "Tags must be a string"
          : "" || tags.length < 1
          ? "Enter atleast one tag"
          : "",
      date: date ? "" : "Please select a date",
      file1: file1 ? "" : "Please upload the Thumbnail image",
      file2: file2 ? "" : "Please upload the Source File",
      software: software ? "" : "Please select a software",
    };

    setErrors(newErrors);
    console.log(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  //   handle the user file input
  const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile2(file);
    }
  };
  const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile1(file);
    }
  };

  //   handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Create a FormData object to send files
      const formData = new FormData();
      formData.append("authKey", authKey);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("tags", tags);
      formData.append("date", date?.toString() ?? "");
      if (file1) {
        formData.append("file1", file1);
      }
      if (file2) {
        formData.append("file2", file2);
      }
      formData.append("software", software);

      try {
        // here we send the request to server using axios
        // const response = await axios.post('server-endpoint', formData);
        alert("Form submitted successfully");
        console.log(Object.fromEntries(formData.entries()));
      } catch (error) {
        console.error("Error sending data to server:", error);
      }
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-col3 pt-24 flex flex-col items-center sm:px-0 px-4 form-bg">
      <div className="glassForm rounded-lg sm:w-4/5   w-full  flex flex-col items-center py-4">
        <p className="text-sm">UIDesignDaily</p>
        <p className="text-xl md:mt-8 font-medium">Upload Files</p>

        {/* form begins */}
        <motion.form
            initial="hidden"
            animate="show"
            variants={fadeIn("down", "tween", 0, 1)}
          className="flex md:flex-row flex-col gap-8 w-full md:px-16 px-4 mt-12 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="lg:w-1/3  md:w-1/2 flex flex-col gap-4">
            <div className="grid w-full  items-center gap-2">
              <Label htmlFor="authKey" className="form-label">
                Authorisation Key{" "}
                {errors.authKey && (
                  <span className="text-red-400">({errors.authKey})</span>
                )}
              </Label>
              <Input
                id="authKey"
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
                type="password"
                className="glassInpt"
                placeholder="Enter your authorisation key"
              />
            </div>

            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="title" className="form-label">
                Title{" "}
                {errors.title && (
                  <span className="text-red-400">({errors.title})</span>
                )}
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter title"
                className="glassInpt focus:border-purple-500"
              />
            </div>

            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="description" className="form-label">
                Description{" "}
                {errors.description && (
                  <span className="text-red-400">({errors.description})</span>
                )}
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="min-h-32 bg-transparent focus:border-purple-500 glassInpt"
              />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col gap-4">
            <div className="grid w-full  items-center gap-2">
              <Label htmlFor="tags" className="form-label ">
                Tags[comma seperated]{" "}
                {errors.tags && (
                  <span className="text-red-400">({errors.tags})</span>
                )}
              </Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                className="glassInpt "
                placeholder="Tags [comma seperated]"
              />
            </div>

            {/* calendar from shadcn */}
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="tags" className="form-label">
                Date{" "}
                {errors.date && (
                  <span className="text-red-400">({errors.date})</span>
                )}
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

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="softwares" className="form-label">
                Softwares{" "}
                {errors.software && (
                  <span className="text-red-400">({errors.software})</span>
                )}
              </Label>
              <select
                id="softwares"
                value={software}
                onChange={(e) => setSoftware(e.target.value)}
                className="glassInpt px-2 py-2 text-sm text-slate-500 rounded-md focus:border-purple-400 focus:ring-1 focus:ring-purple-300 focus:outline-none"
              >
                <option value="" className="text-black">
                  Select a Software
                </option>
                <option value="Figma" className="text-black">
                  Figma
                </option>
                <option value="VSCode" className="text-black">
                  VSCode
                </option>
                <option value="Postman" className="text-black">
                  Postman
                </option>
                <option value="Illustrator" className="text-black">
                  Illustrator
                </option>
              </select>
            </div>
            {/* file input */}
            <div className="flex flex-row lg:gap-8 gap-2">
              <div className="grid w-full md:flex-row flex-col  gap-1.5">
                <Label htmlFor="fileInput1" className="form-label">
                  Thumbnail image{" "}
                  {errors.file1 && (
                    <span className="text-red-400">({errors.file1})</span>
                  )}
                </Label>
                <div className="relative mt-2">
                  <Input
                    type="file"
                    id="fileInput1"
                    name="fileInput1"
                    className="sr-only md:w-auto w-3/4"
                    accept=" .png, jpg, jpeg"
                    onChange={handleFileChange1}
                  />
                  <Label
                    htmlFor="fileInput1"
                    className="cursor-pointer  text-slate-400   bg-transparent border px-4 py-2 glassInpt  rounded-md"
                  >
                    {file1
                      ? `${file1.name?.substring(0, 6)}...`
                      : "Upload file"}
                  </Label>
                </div>
              </div>

              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="fileInput" className="form-label">
                  Source File{" "}
                  {errors.file2 && (
                    <span className="text-red-400">({errors.file2})</span>
                  )}
                </Label>
                <div className="relative mt-2">
                  <Input
                    type="file"
                    id="fileInput"
                    name="fileInput"
                    className="sr-only"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange2}
                  />
                  <Label
                    htmlFor="fileInput"
                    className="cursor-pointer text-slate-400  bg-transparent border px-4 py-2 glassInpt  rounded-md"
                  >
                    {file2 ? `${file2.name.substring(0, 6)}...` : "Upload file"}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </motion.form>
        <Button
          className="bg-gradient-to-r  from-purple-500 to-purple-800 md:w-1/3 w-2/3 mt-8 hover:to-purple-700"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ScreenOne;

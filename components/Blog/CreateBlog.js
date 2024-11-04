"use client";

import React, { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { AiFillFileImage } from "react-icons/ai";

import LoadingCircle from '../Loading/LoadingCircle';
import { handleAxois } from '../jwt';
import { domain } from '../domain';
import { v4 as uuidv4 } from 'uuid';
import SafeHtmlRenderer from '../SafeHtmlRenderer';
import dynamic from 'next/dynamic';
import { AnimatedModalDemo } from '../AnimateButton/AnimateButton';
import { RainbowButton } from '../magicui/rainbow-button';
// Dynamic imports with SSR disabled
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

function CreateBlog() {
  const [blogFields, setBlogFields] = useState({
    title: "",
    cover_image: "",
    img_preview_url: "",
    outlines: [
      {
        id: uuidv4(),
        outline_title: "",
        subtitles: [
          {
            sub_title: "",
            description: "",
            code_block: "",
          }
        ]
      }
    ]
  });

  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const coverImageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [warMsg, setWarMsg] = useState("");

  const handleBlogImage = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setBlogFields((prev) => ({ ...prev, cover_image: file, img_preview_url: previewUrl }));
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setBlogFields({ ...blogFields, [name]: value });
  };

  const handleOutlineChange = (index, e) => {
    const { name, value } = e.target;
    const newOutlines = [...blogFields.outlines];
    newOutlines[index][name] = value;
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const handleSubtitleChange = (outlineIndex, subtitleIndex, e) => {
    const { name, value } = e.target;
    const newOutlines = [...blogFields.outlines];
    newOutlines[outlineIndex].subtitles[subtitleIndex][name] = value;
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const addOutline = () => {
    setBlogFields((prev) => ({
      ...prev,
      outlines: [...prev.outlines, { id: uuidv4(), outline_title: "", subtitles: [{ sub_title: "", description: "" }] }]
    }));
  };

  const removeOutline = (index) => {
    const newOutlines = blogFields.outlines.filter((_, i) => i !== index);
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const addSubtitle = (index) => {
    const newOutlines = [...blogFields.outlines];
    newOutlines[index].subtitles.push({ sub_title: "", description: "" });
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const removeSubtitle = (outlineIndex, subtitleIndex) => {
    const newOutlines = [...blogFields.outlines];
    newOutlines[outlineIndex].subtitles = newOutlines[outlineIndex].subtitles.filter((_, i) => i !== subtitleIndex);
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const editor = useRef(null);
  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing...',
    height: 400,
    style: {
      backgroundColor: '#ffffff', // Dark mode background color
      color: '#000000',           // Dark mode text color
    },
    uploader: {
      insertImageAsBase64URI: true,
      url: `${domain}/ckeditor/upload/`,
      format: 'json',
      isSuccess: (response) => response.success,
      process: (response) => ({
        files: response.data.files || [],
        path: response.data.path,
      }),
      error: (e) => console.log(e),
    },
  }), []);

  const handleJoditContentChange = (outlineIndex, subtitleIndex, newContent) => {
    const newOutlines = [...blogFields.outlines];
    newOutlines[outlineIndex].subtitles[subtitleIndex].description = newContent;
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const handleMonacoEditorChange = (outlineIndex, subtitleIndex, newContent) => {
    const newOutlines = [...blogFields.outlines];
    newOutlines[outlineIndex].subtitles[subtitleIndex].code_block = newContent;
    setBlogFields({ ...blogFields, outlines: newOutlines });
  };

  const handleSubmit = () => {
    setWarMsg("");
   
    if (!blogFields.title) {
      return setWarMsg("Please add blog title");
    } else if (!blogFields.cover_image) {
      return setWarMsg("Please add blog image");
    }

    const payload_data = {
      title: blogFields.title,
      details: blogFields.details,
      cover_image: blogFields.cover_image,
      outlines: blogFields.outlines
    };

    setIsLoading(true);
    handleAxois(`${domain}/blogs/`, 'post', payload_data).then((res) => {
      if (titleRef.current) titleRef.current.value = "";
      if (detailsRef.current) detailsRef.current.value = "";
      if (coverImageRef.current) coverImageRef.current.value = null;
      setBlogFields({
        title: "",
        cover_image: "",
        img_preview_url: "",
        outlines: [
          {
            id: uuidv4(),
            outline_title: "",
            subtitles: [
              {
                sub_title: "",
                description: "",
                code_block: "",
              }
            ]
          }
        ]
      });
      setIsLoading(false);
      setWarMsg("Your blog has been created successfully");
    }).catch((err) => {
      console.log(err);
      if (err?.response?.data?.cover_image) {
        setWarMsg(err?.response?.data?.cover_image[0]);
      } else if (err?.response?.data?.details) {
        setWarMsg(err.response.data.details);
      } else if (err?.response?.data?.title) {
        setWarMsg(err.response.data.title);
      } else if (err?.response?.data?.error) {
        setWarMsg(err.response.data.error);
      }
      setIsLoading(false);
    });
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
<>
  <div className="p-4 max-w-full lg:w-[1000px] mx-auto h-screen overflow-y-auto bg-white dark:bg-gray-900">
    <div className="mb-4 space-y-4">
      {/* Blog Title */}
      <label htmlFor="title" className="block text-lg font-medium text-gray-800 dark:text-gray-200">Blog Title</label>
      <input
        type="text"
        name="title"
        id="title"
        ref={titleRef}
        value={blogFields.title}
        onChange={handleFieldChange}
        className="border border-gray-300 dark:border-gray-700 p-2 w-full rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        placeholder="Enter the blog title"
      />

      {/* Cover Photo */}
      <label htmlFor="cover-photo" className="block text-lg font-medium text-gray-800 dark:text-gray-200">Cover Photo</label>
      <div className="border border-dashed border-gray-300 dark:border-gray-700 p-6 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
               <AiFillFileImage size={30} color='black'/>

          <span className="mt-2 text-gray-600 dark:text-gray-400">PNG, JPG, WEBP, JPEG up to 5MB</span>
          <input
            ref={coverImageRef}
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            accept="image/png, image/jpg, image/jpeg, image/webp"
            onChange={handleBlogImage}
          />
        </label>
        {blogFields.img_preview_url && (
          <Image
            width={500}
            height={300}
            src={blogFields.img_preview_url}
            alt="Preview"
            className="my-4 rounded-md"
          />
        )}
      </div>
    </div>

    {/* Outline and Subtitle Sections */}
    {blogFields.outlines.map((outline, index) => (
      <div key={outline.id} className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Outline {index + 1}</h3>
          <button
            type="button"
            onClick={() => removeOutline(index)}
            className="text-red-500 dark:text-red-400"
          >
            Remove Outline
          </button>
        </div>
        <input
          type="text"
          name="outline_title"
          value={outline.outline_title}
          onChange={(e) => handleOutlineChange(index, e)}
          placeholder="Outline Title"
          className="my-2 p-2 w-full border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
        />
        {outline.subtitles.map((subtitle, subtitleIndex) => (
          <div key={subtitleIndex} className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <div className="flex justify-between items-center my-2">
              <h4 className="text-md font-medium text-gray-800 dark:text-gray-200">Subtitle {subtitleIndex + 1}</h4>
              <button
                type="button"
                onClick={() => removeSubtitle(index, subtitleIndex)}
                className="text-red-500 dark:text-red-400"
              >
                Remove Subtitle
              </button>
            </div>
            <input
              type="text"
              name="sub_title"
              value={subtitle.sub_title}
              onChange={(e) => handleSubtitleChange(index, subtitleIndex, e)}
              placeholder="Subtitle"
              className="my-2 p-2 w-full border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <div className="my-4">
              <label className="text-md font-medium text-gray-800 dark:text-gray-200">Description</label>
            </div>
            <JoditEditor
              ref={editor}
              value={subtitle.description}
              config={config}
              tabIndex={1}
              onBlur={(newContent) => handleJoditContentChange(index, subtitleIndex, newContent)}
            />
            <div className="my-4">
              <label className="text-md font-medium text-gray-800 dark:text-gray-200">Code Block</label>
            </div>
            <MonacoEditor
              height="200px"
              defaultLanguage="javascript"
              value={subtitle.code_block}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
              }}
              onChange={(newContent) => handleMonacoEditorChange(index, subtitleIndex, newContent)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addSubtitle(index)}
          className="mt-4 text-blue-600 dark:text-blue-400"
        >
          Add Subtitle
        </button>
      </div>
    ))}

    <button type="button" onClick={addOutline} className="mt-6 text-blue-600 dark:text-blue-400">
      Add Outline
    </button>
   
    <div className="my-5 text-black font-semibold text-lg ">
        {warMsg}
      </div> 

       
    <div className="flex justify-center ">
        <RainbowButton onClick={handleSubmit}>Submit</RainbowButton>
     
    </div>

  </div>
</>


  
  );
}

export default CreateBlog;

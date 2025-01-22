import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataService from "@/utils/axios";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import countries from "@/utils/countries.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const EditEventForm = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSelectChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await DataService.get(`/events/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await DataService.put(`/events/${id}`, data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold">Edit Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="block text-sm font-medium">Event Title</Label>
          <Input
            type="text"
            name="title"
            value={data?.title ?? ""}
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Description</Label>
          <Textarea
            name="description"
            value={data.description || ""}
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Date</Label>
          <Input
            type="date"
            name="date"
            value={data.date || ""}
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-medium">Type</Label>
          <Select
            defaultValue={data.type}
            onValueChange={(e) => handleSelectChange("type", e)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"public"}>Public</SelectItem>
              <SelectItem value={"private"}>Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-sm font-medium">Location</Label>
          <Select onValueChange={(e) => handleSelectChange("location", e)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-2 text-sm text-gray-600">
            Selected:{" "}
            {countries.find((item) => item.value == data?.location)?.label}
          </p>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="py-2 px-4 rounded">
            Update Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditEventForm;

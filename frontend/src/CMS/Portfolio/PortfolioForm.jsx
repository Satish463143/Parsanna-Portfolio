import React from "react";
import * as Yup from "yup";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputComponent, TypeComponent } from "../../common/Form/Form";
import { useListAllQuery } from "../../api/category.api";
import LoadingComponent from "../../common/LoadingComponent/LoadingComponent";
import Select from "react-select";

const PortfolioForm = ({ submitEvent, loading, detail = null }) => {
  //fetch categoryLit to bind it in category option
  const { data, error, isLoading } = useListAllQuery({});
  if (isLoading) {
    return <LoadingComponent />;
  }
  const categoryList = data?.result;

  const portfolioDTO = Yup.object({
    category: Yup.array().required().default([]),
    type: Yup.object({
      label: Yup.string().matches(/^(Image|Video)$/),
      value: Yup.string()
        .matches(/^(image|video)$/)
        .required(),
    }).required(),
    imageUrl: Yup.array(),
    videoUrl: Yup.string(),
    videoImageUrl: Yup.string(),
    thumbnail: Yup.string(),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(portfolioDTO),
  });

  return (
    <form action="" onSubmit={handleSubmit(submitEvent)}>
      <h3>Content</h3>
      <div className="from_grid">
        <div>
          <label htmlFor="category">Portfolio Category</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={
                  categoryList
                    ? categoryList.map((collection) => ({
                        value: collection._id,
                        label: collection.name,
                      }))
                    : []
                }
                isMulti
                placeholder="Select Category"
              />
            )}
          />
          {errors?.category && (
            <span style={{ color: "red", fontStyle: "italic" }}>
              {errors.category.message}
            </span>
          )}
        </div>
        <div>
        <label htmlFor="type">Portfolio Type</label>
          <TypeComponent
            name='type'
            control={control}
            errMsg={errors?.type?.message}
            placeholder='Select Type'
          />
        </div>
        <div>
          <label htmlFor="videoUrl">Video Url</label>
          <TextInputComponent 
            name='videoUrl'
            control={control}
            type='text'
            defaultValue=''
            errMsg={errors?.videoUrl?.message}
          />
        </div>
        <div>
          <label htmlFor="videoImageUrl">Video Image Url</label>
          <TextInputComponent 
            name='videoImageUrl'
            control={control}
            type='text'
            defaultValue=''
            errMsg={errors?.videoImageUrl?.message}
          />          
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail</label>
          <TextInputComponent 
            name='thumbnail' 
            control={control}
            type='text'
            defaultValue=''
            errMsg={errors?.thumbnail?.message}
          />          
        </div>
      </div>
    </form>
  );
};

export default PortfolioForm;

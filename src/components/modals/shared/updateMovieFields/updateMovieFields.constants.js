import { ALL_GENRES_OPTION } from "consts";
import { genres } from "consts/genres";
import * as Yup from "yup";

export const genresList = genres.filter((genre) => genre.value !== ALL_GENRES_OPTION.value);

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required.").max(100, "Title is too long."),
  poster_path: Yup.string().url("Invalid URL.").required("URL is required."),
  release_date: Yup.date().typeError("Date must be selected.").required("Date is required."),
  genres: Yup.array(Yup.object().shape({ id: Yup.number(), value: Yup.string() }))
    .required("Genre is required.")
    .min(1, "At least 1 genre must be selected."),
  overview: Yup.string().required("Overview is required.").max(500, "Overview is too long."),
  runtime: Yup.number()
    .typeError("Runtime must be a number.")
    .required("Runtime is required.")
    .max(1000, "Runtime is too big.")
});

import { HalfSlide_halfSlide } from '../components/slides/__generated__/HalfSlide_halfSlide.graphql';
import { SingleSlide_singleSlide } from '../components/slides/__generated__/SingleSlide_singleSlide.graphql';

export type Block =
  | HalfSlide_halfSlide['firstHalfBlock']
  | HalfSlide_halfSlide['secondHalfBlock']
  | SingleSlide_singleSlide['block'];

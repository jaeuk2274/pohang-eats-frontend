import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  restaurantsPageQuery,
  restaurantsPageQueryVariables,
} from "../../__generated__/restaurantsPageQuery";

const RESTAURANTS_QUERY = gql`
  query restaurantsPageQuery($input: RestaurantsInput!){
    allCategories {
      ok
      error
      categories {
        id
        name
        coverImg
        slug
        restaurantCount
      }
    }
    restaurants(input: $input) {
      ok
      error
      totalPages
      totalResults
      results {
        id
        name
        coverImg
        category{
          name
        }
        address
        isPromoted
      }
    }
  }
  
`;

export const Restaurants = () => {
  const { data, loading, error } = useQuery<
    restaurantsPageQuery,
    restaurantsPageQueryVariables
  >(RESTAURANTS_QUERY, {
    variables: {
      input: {
        page: 1,
      },
    },
  });
  return (
    <div>
      <form className="bg-gray-800 w-full py-40 flex items-center justify-center">
        <input 
          type="Search" 
          className="input rounded-cd border-0 w-3/12"
          placeholder="Search Restaurants"
        />
      </form>
      {!loading && (
      <div className="max-w-screen-2xl mx-auto mt-8">
        <div className="flex justify-around max-w-xs mx-auto">
          {data?.allCategories.categories?.map((category) => (
            <div className="flex flex-col items-center cursor-pointer">
              <div 
                className="w-14 h-14 bg-cover hover:bg-gray-100 rounded-full"
                style={{ backgroundImage: `url(${category.coverImg})` }}
              ></div>
              <span className="text-sm text-center font-medium">
                {category.name}
              </span>
            </div>
          ))}
        </div>  
      </div>
      )}
    </div>
  );
};
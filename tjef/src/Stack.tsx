import React from "react"
import {Route, Switch} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ArchivedCousinsPage from "./pages/ArchivedCousinsPage"
import BoardPage from "./pages/BoardPage"
import HomePage from "./pages/HomePage"
import StoriesPage from "./pages/StoriesPage"

type AppRoute = {
  name: string
  component: JSX.Element
  path: string | string[]
}

export class AppRoutes {
  static appRoutes: AppRoute[] = [
    {
      name: "HomePage",
      component: <HomePage />,
      path: "/",
    },
    {
      name: "AboutPage",
      component: <AboutPage />,
      path: "/about",
    },
    {
      name: "ArchivedCousinsPage",
      component: <ArchivedCousinsPage />,
      path: "/stories/cousins/:edition",
    },
    {
      name: "StoriesPage",
      component: <StoriesPage />,
      path: "/stories",
    },
    {
      name: "BoardPage",
      component: <BoardPage />,
      path: "/board",
    },
  ]

  static getRoutes(routes: AppRoute[]): JSX.Element[] {
    let routeComponent = (
      name: string,
      path: string,
      component: JSX.Element
    ) => {
      return (
        <Route path={path} key={name} exact render={() => component}></Route>
      )
    }
    return routes.reduce((prev, route) => {
      if (Array.isArray(route.path)) {
        return [
          ...prev,
          ...route.path.map((path: string, index: number) =>
            routeComponent(`${route.name}-${index}`, path, route.component)
          ),
        ]
      } else {
        return [
          ...prev,
          routeComponent(route.name, route.path, route.component),
        ]
      }
    }, new Array<JSX.Element>())
  }

  static getPath(
    name: string,
    pathParams: {[key: string]: string} = {}
  ): string {
    let route = [...AppRoutes.appRoutes].filter(
      (route) => route.name.toLowerCase() === name.toLowerCase()
    )
    if (route.length !== 1) {
      throw Error("Can't get path for route named: " + name)
    }
    let _path = route[0].path
    let path: string
    if (Array.isArray(_path)) {
      path = _path[0]
    } else {
      path = _path
    }
    Object.keys(pathParams).forEach((key) => {
      let value = pathParams[key]
      let toReplace = ":" + key
      path = path.replace(toReplace, value)
    })
    return path
  }
}

export default function Stack() {
  let routes = AppRoutes.getRoutes(AppRoutes.appRoutes)
  return <Switch>{routes}</Switch>
}

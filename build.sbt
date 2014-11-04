name := "jarstorm"

version := "1.0"

scalaVersion := "2.10.4"

jetty()

libraryDependencies += "javax.servlet" % "servlet-api" % "2.5" % "provided"

libraryDependencies += "com.typesafe.akka" % "akka-actor_2.10" % "2.3.6"

libraryDependencies += "io.spray" % "spray-servlet_2.10" % "1.3.2"

libraryDependencies += "org.scalatest" % "scalatest_2.10" % "2.1.3" % "test"

libraryDependencies += "com.typesafe.akka" % "akka-testkit_2.10" % "2.3.6" % "test"

libraryDependencies += "org.mockito" % "mockito-all" % "1.10.8" % "test"
    
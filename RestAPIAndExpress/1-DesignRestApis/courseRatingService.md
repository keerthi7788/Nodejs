
-get a list of all available couses
-get details of single course
-create a course with provided details
-Modify the cousese with some infomation

### Get a list of all available couses
< !-- http://localhost:9993/context/v1/resourse/param-->
-get details of single course
get v1/courses/{id}

-get a list of all available couses
get v1/courses/all

-create a course with provided details
post v1/courses +body

-Modify the cousese with some infomation
put v1/courses/{id}+body :update entire  - replace the resourse like each andevery value of the resourse
patch: perticular record remaing should be remains same: modify the resource

### Get All the students associate with a course
 get v1/course/{:courseid}/students

-get /v1/students?course={:courseid}

ex:
Amazon:
-> Books
    ->Authors

    Qurora:
    -> Books
      -> Autors

      ? ==> quer params when we use optional . it wont effec if not pass. its okay value pair kind of

      ### Get the average rating of all the students for a course
      Get v1/courses/{:courses}/ratings?type=avg



25/01/2025"
- 
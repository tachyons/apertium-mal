#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.


AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.0.0])

AC_INIT([apertium-en-hi], [0.8.4], [mginesti@dlsi.ua.es])
AM_INIT_AUTOMAKE([apertium-en-hi], [0.8.4], no-define)
AC_PROG_LN_S
AC_PROG_AWK
AC_CONFIG_HEADER([config])


PKG_CHECK_MODULES(apertium, [dnl
  apertium-3.0 >= required_apertium_version])

AC_PATH_PROG(XSLTPROC, xsltproc, no)
if test x$ac_cv_path_XSLTPROC = x
then
  AC_MSG_ERROR([You don't have xsltproc installed.])
fi
if test x$ac_cv_path_XSLTPROC = xno
then
  AC_MSG_ERROR([You don't have xsltproc installed.])
fi
                     
  
AC_OUTPUT([Makefile])

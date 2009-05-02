#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.


AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.0.4])

AC_INIT([apertium-sa-XX], [0.1], [anusaaraka@users.sourceforge.net])
AM_INIT_AUTOMAKE([apertium-sa-XX], [0.1], no-define)
AC_PROG_LN_S
AC_PROG_AWK
AC_CONFIG_HEADER([config])

PKG_CHECK_MODULES(apertium, [dnl
  apertium-3.0 >= required_apertium_version])
  
AC_OUTPUT([Makefile])

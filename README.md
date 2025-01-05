# React 19 useEffect Cleanup Issue

This repository demonstrates a potential issue with the `useEffect` cleanup function in React 19 where it might not be called after component unmount under certain conditions.  The example showcases a simple counter component and highlights the problem.  The solution provides a corrected version.

## Bug Description

The `useEffect` hook is used to perform side effects.  In this case, the cleanup function should log 'Unmounting!' before the component is removed from the DOM.  However, under specific circumstances (potentially related to component unmounting optimization), this cleanup might not be consistently called.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs.  The 'Unmounting!' message might be missing, indicating the issue.

## Solution

The solution involves ensuring the cleanup function is properly executed.  This is often due to unexpected component unmounting before the cleanup function runs.
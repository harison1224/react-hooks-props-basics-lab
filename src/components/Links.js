import React from 'react'
import user from "../data/user";

export default function Links() {
  return (
    <div>
      <h3>Links</h3>
      <a href={user.links.linkedin}>{user.links.linkedin}</a><br></br>
      <a href={user.links.github}>{user.links.github}</a>
    </div>
  )
}
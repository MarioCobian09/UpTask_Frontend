import { getProjectById } from "@/api/ProjectAPI"
import EditProjectForm from "@/components/projects/EditProjectForm"
import { useQuery } from "@tanstack/react-query"
import { Navigate, useParams } from "react-router-dom"


export default function EditProjectView() {

  const params = useParams()
  const projectId = params.projectId!
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['editProject', projectId],   // React-Query guarda en cache los resultados que se obtengan de la query, al existir dos con la misma Key, usara el del cache, por eso le pasamos el ID para indicar que son diferentes
    queryFn: () => getProjectById(projectId),
    retry: false
  })
  
  if(isLoading) return 'Cargando...'
  if(isError) return <Navigate to={'/404'} />

  if(data) return <EditProjectForm data={data} projectId={projectId} />
}

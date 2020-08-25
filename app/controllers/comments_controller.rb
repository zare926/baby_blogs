class CommentsController < ApplicationController
  
  def create
    @comment = Comment.create(content: comment_params[:content], post_id: comment_params[:post_id], user_id: current_user.id)
    if @comment.save
      redirect_to post_path(@comment.post.id)
    else
      redirect_to post_path(@comment.post.id)
    end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post.id)
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id, post_id: params[:post_id])
  end

end
